import css from './TransactionHistory.module.css';

export const TransactionHistory = ({ items }) => {
  // console.log(items);
  return (
    <table className={css.transactionHistory}>
      <thead>
        <tr className={css.title}>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => {
          return (
            <tr className={css.line} key={id}>
              <td>{type}</td>
              <td>{amount}</td>
              <td>{currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
