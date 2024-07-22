import React, { useState } from 'react';
import { format, addMonths, subMonths, startOfMonth, endOfMonth, startOfWeek, endOfWeek, addDays, isSameMonth, isSameDay, toDate } from 'date-fns';
import { ko } from 'date-fns/locale';
import styles from '../../styles/home/Calender.module.css';
import { Icon } from '@iconify/react';

const Calendar = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());

  const renderHeader = () => {
    const monthFormat = "MMM";
    const yearFormat = "yyyy";

    return (
      <div className={`${styles.header} ${styles.row} ${styles['flex-middle']}`}>
        <div className={`${styles.col} ${styles['col-center']}`}>
          <div style={{ display: "flex" }}>
          <div style={{ display: "flex", alignItems:"end", columnGap:"8px" }}>
            <span style={{ fontFamily: 'yg-jalnan', fontSize:"1.6rem" }}>{format(currentMonth, monthFormat)}</span>
            <span style={{marginBottom:"10px"}}>{format(currentMonth, yearFormat)}</span>
          </div>
          </div>
        </div>
        <div className={`${styles.col} ${styles['col-end']}`}>
          <div className={styles.icon} onClick={prevMonth}>
            <Icon icon="formkit:left" />
          </div>
          <div className={styles.icon} onClick={nextMonth}>
            <Icon icon="formkit:right" />
          </div>
        </div>
      </div>
    );
  };

  const renderCells = () => {
    const monthStart = startOfMonth(currentMonth);
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfWeek(monthStart, { locale: ko });
    const endDate = endOfWeek(monthEnd, { locale: ko });

    const dateFormat = "d";
    const rows = [];

    let days = [];
    let day = startDate;
    let formattedDate = "";

    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        formattedDate = format(day, dateFormat);
        const cloneDay = day;

        days.push(
          <div
            className={`${styles.col} ${styles.cell} ${
              !isSameMonth(day, monthStart)
                ? styles.disabled
                : isSameDay(day, selectedDate) ? styles.selected : ""
            }`}
            key={day}
            onClick={() => onDateClick(toDate(cloneDay))}
          >
            <span className={styles.number}>{formattedDate}</span>
            <span className={`${styles.bg} ${isSameDay(day, new Date()) ? styles.highlight : ''}`}></span>
          </div>
        );
        day = addDays(day, 1);
      }
      rows.push(
        <div className={styles.row} key={day}>
          {days}
        </div>
      );
      days = [];
    }
    return <div className={styles.body}>{rows}</div>;
  };

  const onDateClick = day => {
    setSelectedDate(day);
  };

  const nextMonth = () => {
    setCurrentMonth(addMonths(currentMonth, 1));
  };

  const prevMonth = () => {
    setCurrentMonth(subMonths(currentMonth, 1));
  };

  return (
    <div className={styles.calendar}>
      {renderHeader()}
      {renderCells()}
    </div>
  );
}

export default Calendar;
