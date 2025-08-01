import React from "react";

function PriceList() {
  return (
    <section id="prices">
      <div className="section-content">
        <h2>Price list</h2>
        <div className="pricelist-content text-sm sm:text-xl">
          <div className="flex gap-4 flex-col md:flex-row items-center justify-center">
            <h3 className="md:w-36">Climbing</h3>
            <table className="">
              <thead className="">
                <tr className="">
                  <th></th>
                  <th>Adults</th>
                  <th>Reduced</th>
                  <th>Kids</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Day pass</th>
                  <td>13,50</td>
                  <td>11,50</td>
                  <td>9,50</td>
                </tr>
                <tr>
                  <th scope="row">Early bird</th>
                  <td>11,00</td>
                  <td>9,50</td>
                  <td>9,0</td>
                </tr>
                <tr>
                  <th scope="row">Month pass</th>
                  <td>75,00</td>
                  <td>64,00</td>
                  <td>38,00</td>
                </tr>
                <tr>
                  <th scope="row">Year pass</th>
                  <td>580,00</td>
                  <td>480,00</td>
                  <td>290,00</td>
                </tr>
                <tr>
                  <th scope="row">Year pass (monthly)</th>
                  <td>55,00</td>
                  <td>46,00</td>
                  <td>32,00</td>
                </tr>
                <tr>
                  <th scope="row">10+1 card</th>
                  <td>135,00</td>
                  <td>115,00</td>
                  <td>95,00</td>
                </tr>
                <tr>
                  <th scope="row">50 card</th>
                  <td>535,00</td>
                  <td>430,00</td>
                  <td>280,00</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="flex gap-4 flex-col md:flex-row items-center justify-center">
            <h3 className="md:w-36">Equipment hire</h3>
            <table>
              <tbody>
                <tr>
                  <th scope="row">Shoes</th>
                  <td>3,00</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <th scope="row">Chalkbag</th>
                  <td>1,50</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <th scope="row">Crash pad</th>
                  <td>7,50</td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="flex gap-4 flex-col md:flex-row items-center justify-center">
            <h3 className="md:w-36">Courses</h3>
            <table>
              <tbody>
                <tr>
                  <th scope="row">Technique for adults</th>
                  <td>75,00</td>

                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <th scope="row">Single session</th>
                  <td>45,00</td>
                  <td className="left">(1 hour)</td>
                  <td></td>
                </tr>
                <tr>
                  <th scope="row">Kids 6&ndash;9 years</th>
                  <td>42,00</td>
                  <td className="left">monthly</td>
                  <td></td>
                </tr>
                <tr>
                  <th scope="row">Kids 10+ years</th>
                  <td>47,00</td>
                  <td className="left">monthly</td>
                  <td></td>
                </tr>
                <tr>
                  <th scope="row">Kids (sample)</th>
                  <td>10,00</td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PriceList;
