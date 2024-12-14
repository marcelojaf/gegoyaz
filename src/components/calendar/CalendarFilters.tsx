"use client";

import { useState } from "react";
import { FiltersState } from "@/types/calendar";
import styles from "./CalendarFilters.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

interface CalendarFiltersProps {
  filters: FiltersState;
  uniqueValues: {
    tipo: string[];
    paraquem: string[];
    local: string[];
    secao: string[];
  };
  onFilterChange: (filterType: keyof FiltersState, values: string[]) => void;
  onSearchChange: (term: string) => void;
  onClearFilters: () => void;
}

export function CalendarFilters({
  filters,
  uniqueValues,
  onFilterChange,
  onSearchChange,
  onClearFilters,
}: CalendarFiltersProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className={styles.filters}>
      <div className="container mb-4">
        {/* Botão de expansão */}
        <button
          className="btn btn-outline-secondary w-100 d-flex align-items-center justify-content-between mb-3"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <span>Filtros</span>
          <FontAwesomeIcon icon={isExpanded ? faChevronUp : faChevronDown} />
        </button>

        {/* Conteúdo colapsável */}
        {isExpanded && (
          <div className="row g-3">
            <div className="col-12 d-flex gap-2">
              <input
                type="search"
                className="form-control"
                placeholder="Buscar atividades..."
                value={filters.searchTerm}
                onChange={(e) => onSearchChange(e.target.value)}
              />
              <button
                className="btn btn-outline-secondary"
                onClick={onClearFilters}
                type="button"
              >
                Limpar Filtros
              </button>
            </div>

            <div className="col-md-3">
              <label className="form-label">Tipo</label>
              <select
                className="form-select"
                multiple
                value={filters.tipo}
                onChange={(e) =>
                  onFilterChange(
                    "tipo",
                    Array.from(
                      e.target.selectedOptions,
                      (option) => option.value
                    )
                  )
                }
              >
                {uniqueValues.tipo.map((tipo) => (
                  <option key={tipo} value={tipo}>
                    {tipo}
                  </option>
                ))}
              </select>
            </div>

            <div className="col-md-3">
              <label className="form-label">Para quem</label>
              <select
                className="form-select"
                multiple
                value={filters.paraquem}
                onChange={(e) =>
                  onFilterChange(
                    "paraquem",
                    Array.from(
                      e.target.selectedOptions,
                      (option) => option.value
                    )
                  )
                }
              >
                {uniqueValues.paraquem.map((value) => (
                  <option key={value} value={value}>
                    {value}
                  </option>
                ))}
              </select>
            </div>

            <div className="col-md-3">
              <label className="form-label">Local</label>
              <select
                className="form-select"
                multiple
                value={filters.local}
                onChange={(e) =>
                  onFilterChange(
                    "local",
                    Array.from(
                      e.target.selectedOptions,
                      (option) => option.value
                    )
                  )
                }
              >
                {uniqueValues.local.map((value) => (
                  <option key={value} value={value}>
                    {value}
                  </option>
                ))}
              </select>
            </div>

            <div className="col-md-3">
              <label className="form-label">Seção</label>
              <select
                className="form-select"
                multiple
                value={filters.secao}
                onChange={(e) =>
                  onFilterChange(
                    "secao",
                    Array.from(
                      e.target.selectedOptions,
                      (option) => option.value
                    )
                  )
                }
              >
                {uniqueValues.secao.map((value) => (
                  <option key={value} value={value}>
                    {value}
                  </option>
                ))}
              </select>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
