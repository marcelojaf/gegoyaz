"use client";

import { useState, useEffect, useMemo } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CalendarFilters } from "./CalendarFilters";
import { MonthCard } from "./MonthCard";
import atividades from "@/data/atividades.json";
import styles from "./CalendarPage.module.css";
import type { Atividade, FiltersState } from "@/types/calendar";

export default function CalendarPage() {
  // Estado para atividades filtradas
  const [filteredAtividades, setFilteredAtividades] =
    useState<Atividade[]>(atividades);

  // Estado para os filtros
  const [filters, setFilters] = useState<FiltersState>({
    tipo: [],
    paraquem: [],
    local: [],
    secao: [],
    searchTerm: "",
  });

  // Extrair valores únicos para os filtros usando useMemo para performance
  const uniqueValues = useMemo(
    () => ({
      tipo: [...new Set(atividades.map((a) => a.tipo))].sort(),
      paraquem: [...new Set(atividades.map((a) => a.paraquem))].sort(),
      local: [...new Set(atividades.map((a) => a.local))].sort(),
      secao: [...new Set(atividades.map((a) => a.secao))].sort(),
    }),
    []
  );

  // Agrupar atividades por mês usando useMemo
  const groupedActivities = useMemo(() => {
    const monthOrder = [
      "Janeiro",
      "Fevereiro",
      "Março",
      "Abril",
      "Maio",
      "Junho",
      "Julho",
      "Agosto",
      "Setembro",
      "Outubro",
      "Novembro",
      "Dezembro",
    ];

    const grouped = filteredAtividades.reduce((acc, activity) => {
      if (!acc[activity.mes]) {
        acc[activity.mes] = [];
      }
      acc[activity.mes].push(activity);
      return acc;
    }, {} as Record<string, Atividade[]>);

    // Ordenar atividades dentro de cada mês por data
    Object.keys(grouped).forEach((month) => {
      grouped[month].sort((a, b) => {
        // Extrair números das datas para comparação
        const getFirstNumber = (str: string) =>
          parseInt(str.match(/\d+/)?.[0] || "0");
        return getFirstNumber(a.data) - getFirstNumber(b.data);
      });
    });

    // Retornar objeto ordenado por meses
    return Object.fromEntries(
      monthOrder
        .filter((month) => grouped[month])
        .map((month) => [month, grouped[month]])
    );
  }, [filteredAtividades]);

  // Handlers para mudanças nos filtros
  const handleFilterChange = (
    filterType: keyof FiltersState,
    values: string[]
  ) => {
    setFilters((prev) => ({
      ...prev,
      [filterType]: values,
    }));
  };

  const handleSearchChange = (term: string) => {
    setFilters((prev) => ({
      ...prev,
      searchTerm: term,
    }));
  };

  const handleClearFilters = () => {
    setFilters({
      tipo: [],
      paraquem: [],
      local: [],
      secao: [],
      searchTerm: "",
    });
  };

  // Efeito para aplicar filtros
  useEffect(() => {
    let filtered = [...atividades];

    // Aplicar filtros de categoria
    const filterByCategory = (category: keyof FiltersState) => {
      if (filters[category].length > 0) {
        filtered = filtered.filter((a) =>
          filters[category].includes(a[category as keyof Atividade] as string)
        );
      }
    };

    filterByCategory("tipo");
    filterByCategory("paraquem");
    filterByCategory("local");
    filterByCategory("secao");

    // Aplicar busca por texto
    if (filters.searchTerm) {
      const searchLower = filters.searchTerm.toLowerCase();
      filtered = filtered.filter(
        (a) =>
          a.atividade.toLowerCase().includes(searchLower) ||
          a.local.toLowerCase().includes(searchLower) ||
          a.data.toLowerCase().includes(searchLower)
      );
    }

    setFilteredAtividades(filtered);
  }, [filters]);

  // Calcular estatísticas das atividades filtradas
  const stats = useMemo(
    () => ({
      total: filteredAtividades.length,
      porMes: Object.keys(groupedActivities).length,
      porSecao: filteredAtividades.reduce((acc, curr) => {
        acc[curr.secao] = (acc[curr.secao] || 0) + 1;
        return acc;
      }, {} as Record<string, number>),
    }),
    [filteredAtividades, groupedActivities]
  );

  return (
    <>
      <Header />
      <main className={styles.calendarPage}>
        <div className="container py-4">
          <h1 className="text-center mb-4">Calendário de Atividades 2025</h1>

          {/* Filtros */}
          <CalendarFilters
            filters={filters}
            uniqueValues={uniqueValues}
            onFilterChange={handleFilterChange}
            onSearchChange={handleSearchChange}
            onClearFilters={handleClearFilters}
          />

          {/* Mensagem quando não há resultados */}
          {filteredAtividades.length === 0 && (
            <div className="alert alert-info text-center" role="alert">
              Nenhuma atividade encontrada com os filtros selecionados.
              <button className="btn btn-link" onClick={handleClearFilters}>
                Limpar filtros
              </button>
            </div>
          )}

          {/* Lista de meses em coluna única */}
          <div>
            {Object.entries(groupedActivities).map(([month, activities]) => (
              <MonthCard key={month} month={month} activities={activities} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
