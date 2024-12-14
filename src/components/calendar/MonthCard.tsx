'use client';

import { Atividade } from '@/types/calendar';
import styles from './MonthCard.module.css';

interface MonthCardProps {
  month: string;
  activities: Atividade[];
}

export function MonthCard({ month, activities }: MonthCardProps) {
  return (
    <div className={styles.monthCard}>
      <div className={styles.monthHeader}>
        <h2>{month}</h2>
      </div>
      <div className="table-responsive">
        <table className="table table-hover">
          <thead>
            <tr>
              <th className={styles.columnHeader} style={{ width: '100px' }}>Data</th>
              <th className={styles.columnHeader} style={{ width: '450px' }}>Evento</th>
              <th className={styles.columnHeader} style={{ width: '150px' }}>Para Quem</th>
              <th className={styles.columnHeader} style={{ width: '200px' }}>Local</th>
            </tr>
          </thead>
          <tbody>
            {activities.map((activity, index) => (
              <tr 
                key={`${activity.data}-${index}`}
                className={`${styles.activityRow} hover-row`}
              >
                <td className={styles.centeredCell}>{activity.data}</td>
                <td>
                  <strong>{activity.atividade}</strong>
                  <br />
                  <small className="text-muted">
                    {activity.secao !== "Todos" && `Seção: ${activity.secao}`}
                  </small>
                </td>
                <td className={styles.centeredCell}>{activity.paraquem}</td>
                <td className={styles.centeredCell}>{activity.local}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}