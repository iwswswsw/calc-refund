import React, { useState } from 'react';
import styled from 'styled-components';
import { format, parse, addDays, isWithinInterval, differenceInCalendarDays, isBefore } from 'date-fns';
import { blockDays, passType, personType, price, pricePeriods } from '../const';

const Root = styled.div``;

const LiBlockDays = styled.li`
  color: ${({ red }) => ( red ? 'red' : 'black' )};
`;

const getUserPricePeriod = (date) => {
  if (isWithinInterval(date, pricePeriods.p1.period)) return 'p1';
  if (isWithinInterval(date, pricePeriods.p2.period)) return 'p2';
  return 'p3'
}

export default () => {
  const [userPassType, setUserPassType] = useState(passType.common.key);
  const [userPersonType, setUserPersonType] = useState(personType.adult.key);
  const [startDate, setStartDate] = useState(new Date(2019, 2, 1));
  const endDate = addDays(startDate, 365);

  const isWithinValidity = (date) => isWithinInterval(date, {start: startDate, end: endDate});

  const actualBlockDays = blockDays.filter((d) => isWithinValidity(d));
  const actualBlockDaysNum = actualBlockDays.length;
  const leftDays = differenceInCalendarDays(endDate, new Date(2020, 1, 29));
  const leftBlockDays = blockDays.filter((d) => {
    const period = {
      start: new Date(2020, 1, 29),
      end: isBefore(endDate, new Date(2020, 1, 29)) ? new Date(2020, 1, 29) : endDate,
    }
    return isWithinInterval(d, period);
  });
  const leftBlockDaysNum = leftBlockDays.length;
  const refund = ( price[userPersonType][userPassType][getUserPricePeriod(startDate)] / (366 - actualBlockDaysNum) ) * (leftDays - leftBlockDaysNum);

  const handleChangeStartDate = (event) => {
    setStartDate(parse(event.target.value, 'yyyy-MM-dd', new Date()));
  }

  const handleChangePassType = (event) => {
    setUserPassType(event.target.value);
  }

  const handleChangePersonType = (event) => {
    setUserPersonType(event.target.value);
  }

  return (
    <Root>
      <p>
        <select value={userPassType} onChange={handleChangePassType}>
          {Object.keys(passType).map((pt) => (
            <option value={passType[pt].key} key={pt}>{passType[pt].name}</option>
          ))}
        </select>
        <select value={userPersonType} onChange={handleChangePersonType}>
          {Object.keys(personType).map((pt) => (
            <option value={personType[pt].key} key={pt}>{personType[pt].name}</option>
          ))}
        </select>
      </p>
      <p>
        有効期間開始日：
        <input type="date" value={format(startDate, 'yyyy-MM-dd')} min="2019-02-28" max="2020-12-31" onChange={handleChangeStartDate}/>
      </p>
      <p>
        返金額：{refund}円
      </p>
      <hr />
      <h3>計算用</h3>
      <p>有効期間終了日：{format(endDate, 'yyyy-MM-dd')}</p>
      <p>年間パスポート購入額：{price[userPersonType][userPassType][getUserPricePeriod(startDate)]}</p>
      <p>有効期間に占める使用不可日数：{actualBlockDaysNum}</p>
      <p>2020年2月29日以降の年間パスポート有効期間：{leftDays}</p>
      <p>2020年2月29日以降の有効期間に占める使用不可日数：{leftBlockDaysNum}</p>
      <hr />
      <h3>参考情報</h3>
      <p>
        ご返金額＝<br />
          （年間パスポート購入額÷（366日－有効期間に占める使用不可日数）） ×<br />
          残存日数（2020年2月29日以降の年間パスポート有効期間 － 2020年2月29日以降の有効期間に占める使用不可日数）
      </p>
      <p>年間パスポート購入額（大人）</p>
      <table>
        <tr>
          <td></td>
          {
            Object.keys(pricePeriods).map((p) => (
              <td>{pricePeriods[p].name}</td>
            ))
          }
        </tr>
        {
          Object.keys(price.adult).map((pt) => {
            const tds = Object.keys(price.adult[pt]).map((p) => (
              <td>{price.adult[pt][p]}</td>
            ))
            return (
              <tr>
                <td>{passType[pt].name}</td>
                {tds}
              </tr>
            )
          })
        }
      </table>
      <p>年間パスポート購入額（小人）</p>
      <table>
        <tr>
          <td>小人</td>
          {
            Object.keys(pricePeriods).map((p) => (
              <td>{pricePeriods[p].name}</td>
            ))
          }
        </tr>
        {
          Object.keys(price.child).map((pt) => {
            const tds = Object.keys(price.child[pt]).map((p) => (
              <td>{price.child[pt][p]}</td>
            ))
            return (
              <tr>
                <td>{passType[pt].name}</td>
                {tds}
              </tr>
            )
          })
        }
      </table>
      <p>年パス不可日：</p>
      <ul>
        {
          blockDays.map((d, i) => (
            <LiBlockDays key={i.toFixed()} red={isWithinValidity(d)}>{format(d, 'yyyy/MM/dd')}</LiBlockDays>
          ))
        }
      </ul>
    </Root>
  );
};

