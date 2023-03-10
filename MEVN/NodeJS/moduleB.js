function Compund(rate) {
    return function(principal, time) {
      const amount = principal * (1 + (rate / 100)) ** time;
      const interest = amount - principal;
      return { amount, interest };
    }
  }
  const calculate = Compund(5);
  const result = calculate(1000, 3);
  console.log(`total amount: ${result.amount}`);