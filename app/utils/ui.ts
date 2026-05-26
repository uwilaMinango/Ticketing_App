
export const getPriorityClass = (priority: string) => {
  switch (priority){
    case 'High':
      return 'text-red-500 font-bold';
    case 'Medium': 
      return 'text-yellow-500 font-bold';
    case 'Low': 
      return 'text-green-500 font-bold';
  }
}