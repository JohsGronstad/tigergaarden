export default function formatDate(date:Date) {
    const day = date.getDate();
    const monthIndex = date.getMonth();
    const year = date.getFullYear();
  
    const monthNames = [
      'Januar', 'Februar', 'Mars', 'April', 'Mai', 'Juni', 'Juli',
      'August', 'September', 'oktober', 'November', 'Desember'
    ];
  
    const monthName = monthNames[monthIndex];
  
    return `${day}. ${monthName} ${year}`;
  }
    