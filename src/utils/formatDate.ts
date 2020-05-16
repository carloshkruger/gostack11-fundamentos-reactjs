const formatDate = (dateTimeStamp: string): string => {
  const date = new Date(dateTimeStamp);
  return new Intl.DateTimeFormat('pt-BR').format(date);
};

export default formatDate;
