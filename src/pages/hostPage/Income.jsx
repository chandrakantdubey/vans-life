import reviewGraph from '../../assets/reviews-graph.png'

export default function Income() {
  const transactionsData = [
    { amount: 720, date: "Jan 3, '23", id: "1" },
    { amount: 560, date: "Dec 12, '22", id: "2" },
    { amount: 980, date: "Dec 3, '22", id: "3" },
  ]
  return (
    <div className="app__wrapper container">
      <section className="host-income">
        <h2>Income</h2>
        <p>
          Last <span>30 days</span>
        </p>
        <h3>$2,260</h3>
        <img
          src={reviewGraph}
          alt="Income graph"
          className='w-100 graph'
        />
        <div className="info-header">
          <h3>Your transactions (3)</h3>
          <p>
              Last <span>30 days</span>
          </p>
        </div>
        <div className="transactions">
          {transactionsData.map((item) => (
            <div key={item.id} className="transaction">
              <h3>${item.amount}</h3>
              <p>{item.date}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
