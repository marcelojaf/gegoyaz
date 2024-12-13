// Constants
const SELECTORS = {
  CALENDAR_CONTAINER: "#calendar-container",
  LAST_UPDATE: "#lastUpdate",
  FILTER_TIPO: "#filterTipo",
  FILTER_PARA_QUEM: "#filterParaQuem",
  FILTER_LOCAL: "#filterLocal",
  FILTER_SECAO: "#filterSecao",
  BTN_LIMPAR_FILTROS: "#btnLimparFiltros",
  BTN_GERAR_PDF: "#btnGerarPDF",
};

const CLASSES = {
  MONTH: "month",
  MONTH_HEADER: "month__header",
  MONTH_TITLE: "month__title",
  MONTH_TABLE: "month__table",
  HIDDEN: "hidden",
};

// Components
class MonthCard {
  constructor(month, events) {
    this.month = month;
    this.events = events;
  }

  createTable() {
    return `
            <div class="table-responsive">
                <table class="table table-bordered ${CLASSES.MONTH_TABLE}">
                    <thead class="month__table-header">
                        <tr>
                            <th>Data</th>
                            <th>Evento</th>
                            <th>Local</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${this.events
                          .map(
                            (event) => `
                            <tr data-tipo="${event.tipo}" 
                                data-paraquem="${event.paraquem}"
                                data-local="${event.local}"
                                data-secao="${event.secao}">
                                <td>${event.data}</td>
                                <td>${event.atividade}</td>
                                <td>${event.local}</td>
                            </tr>
                        `
                          )
                          .join("")}
                    </tbody>
                </table>
            </div>
        `;
  }

  render() {
    return `
            <div class="${CLASSES.MONTH}" data-month="${this.month}">
                <div class="${CLASSES.MONTH_HEADER}">
                    <h4 class="${CLASSES.MONTH_TITLE}">${this.month}</h4>
                </div>
                ${this.createTable()}
            </div>
        `;
  }
}

class FilterManager {
  constructor() {
    this.filters = {
      tipo: "",
      paraquem: "",
      local: "",
      secao: "",
    };
    this.initializeSelects();
    this.bindEvents();
  }

  initializeSelects() {
    $(".filters__select").select2({
      placeholder: "Selecione...",
      allowClear: true,
    });
  }

  bindEvents() {
    $(SELECTORS.BTN_LIMPAR_FILTROS).on("click", () => this.clearFilters());
    $(".filters__select").on("change", () => this.applyFilters());
  }

  clearFilters() {
    $(".filters__select").val(null).trigger("change");
    this.applyFilters();
  }

  applyFilters() {
    this.filters = {
      tipo: $(SELECTORS.FILTER_TIPO).val(),
      paraquem: $(SELECTORS.FILTER_PARA_QUEM).val(),
      local: $(SELECTORS.FILTER_LOCAL).val(),
      secao: $(SELECTORS.FILTER_SECAO).val(),
    };

    this.filterEvents();
  }

  filterEvents() {
    $("tr[data-tipo]").each((_, row) => {
      const $row = $(row);
      const matches = Object.entries(this.filters).every(([key, value]) => {
        if (!value) return true;
        return $row.data(key).toString().includes(value);
      });

      $row.toggleClass(CLASSES.HIDDEN, !matches);
    });

    // Esconde meses vazios
    $(`.${CLASSES.MONTH}`).each((_, month) => {
      const $month = $(month);
      const hasVisibleEvents = $month.find("tr:not(.hidden)").length > 0;
      $month.toggleClass(CLASSES.HIDDEN, !hasVisibleEvents);
    });
  }
}

class CalendarApp {
  constructor() {
    this.filterManager = new FilterManager();
    this.loadData();
    this.bindEvents();
  }

  bindEvents() {
    $(SELECTORS.BTN_GERAR_PDF).on("click", this.generatePDF);
  }

  async generatePDF() {
    const element = document.querySelector(SELECTORS.CALENDAR_CONTAINER);
    const canvas = await html2canvas(element);
    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF({
      orientation: "portrait",
      unit: "px",
      format: [canvas.width, canvas.height],
    });

    pdf.addImage(imgData, "PNG", 0, 0, canvas.width, canvas.height);
    pdf.save("calendario-escoteiro.pdf");
  }

  async loadData() {
    try {
      const response = await fetch("assets/data/atividades.json");
      const data = await response.json();
      this.renderCalendar(data);
      this.populateFilters(data);
      this.updateLastUpdate();
    } catch (error) {
      console.error("Erro ao carregar dados:", error);
    }
  }

  renderCalendar(data) {
    const months = [...new Set(data.map((item) => item.mes))];
    const container = $(SELECTORS.CALENDAR_CONTAINER);

    months.forEach((month) => {
      const monthEvents = data.filter((item) => item.mes === month);
      const monthCard = new MonthCard(month, monthEvents);
      container.append(monthCard.render());
    });
  }

  populateFilters(data) {
    const getUniqueValues = (field) => [
      ...new Set(data.map((item) => item[field])),
    ];

    const populateSelect = (selector, values) => {
      const select = $(selector);
      values.forEach((value) => {
        select.append(new Option(value, value));
      });
    };

    populateSelect(SELECTORS.FILTER_TIPO, getUniqueValues("tipo"));
    populateSelect(SELECTORS.FILTER_PARA_QUEM, getUniqueValues("paraquem"));
    populateSelect(SELECTORS.FILTER_LOCAL, getUniqueValues("local"));
    populateSelect(SELECTORS.FILTER_SECAO, getUniqueValues("secao"));
  }

  updateLastUpdate() {
    const now = new Date();
    $(SELECTORS.LAST_UPDATE).text(
      now.toLocaleDateString("pt-BR") +
        " - " +
        now.toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" })
    );
  }
}

// Initialize app
$(document).ready(() => {
  new CalendarApp();
});
