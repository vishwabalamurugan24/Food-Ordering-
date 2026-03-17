export const formatDate = (date: Date): string => {
  return date.toISOString().split('T')[0];
};

export const calculateTotal = (items: { price: number; quantity: number }[]): number => {
  return items.reduce((total, item) => total + item.price * item.quantity, 0);
};
