import React, { useState } from 'react';
import RcPagination from 'rc-pagination';
import 'rc-pagination/assets/index.css';

const arrowPath =
  'M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h' +
  '-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v' +
  '60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91' +
  '.5c1.9 0 3.8-0.7 5.2-2L869 536.2c14.7-12.8 14.7-35.6 0-48.4z';

const doublePath = [
  'M533.2 492.3L277.9 166.1c-3-3.9-7.7-6.1-12.6-6.1H188c-6' +
    '.7 0-10.4 7.7-6.3 12.9L447.1 512 181.7 851.1c-4.1 5.2-0' +
    '.4 12.9 6.3 12.9h77.3c4.9 0 9.6-2.3 12.6-6.1l255.3-326.' +
    '1c9.1-11.7 9.1-27.9 0-39.5z',
  'M837.2 492.3L581.9 166.1c-3-3.9-7.7-6.1-12.6-6.1H492c-6' +
    '.7 0-10.4 7.7-6.3 12.9L751.1 512 485.7 851.1c-4.1 5.2-0' +
    '.4 12.9 6.3 12.9h77.3c4.9 0 9.6-2.3 12.6-6.1l255.3-326.' +
    '1c9.1-11.7 9.1-27.9 0-39.5z',
];

const getSvgIcon = (path: any, reverse: any, type: any) => {
  const paths = Array.isArray(path) ? path : [path];
  const renderPaths = paths.map((p, i) => {
    return <path key={i} d={p} />;
  });
  return (
    <i
      className={`custom-icon-${type}`}
      style={{
        fontSize: '16px',
      }}
    >
      <svg
        viewBox="0 0 1024 1024"
        width="1em"
        height="1em"
        fill="currentColor"
        style={{
          verticalAlign: '-.125em',
          transform: `rotate(${(reverse && 180) || 0}deg)`,
        }}
      >
        {renderPaths}
      </svg>
    </i>
  );
};

const nextIcon = getSvgIcon(arrowPath, false, 'next');
const prevIcon = getSvgIcon(arrowPath, true, 'prev');
const jumpNextIcon = () => getSvgIcon(doublePath, false, 'jump-next');
const jumpPrevIcon = () => getSvgIcon(doublePath, true, 'jump-prev');

interface Props {
  current: number;
  total: number;
  onChange?: ((page: number, pageSize: number) => void) | undefined;
  pageSize: number;
}

const Pagination: React.FC<Props> = ({
  current,
  total,
  onChange,
  pageSize,
}) => {
  /*eslint-disable */
  const locale = {
    items_per_page: 'Items per page',
    jump_to: ' Jump to',
    jump_to_confirm: 'Confirm',
    page: 'Page',
    prev_page: 'Previous page',
    next_page: 'Next page',
    prev_5: 'Next 5 pages',
    next_5: '5 pages backward',
    prev_3: 'Forward 3 pages',
    next_3: '3 pages back',
  };
  /*eslint-enable */

  return (
    <RcPagination
      onChange={onChange}
      current={current}
      total={total}
      showLessItems
      style={{ marginBottom: '2rem' }}
      prevIcon={prevIcon}
      nextIcon={nextIcon}
      jumpPrevIcon={jumpPrevIcon}
      jumpNextIcon={jumpNextIcon}
      locale={locale}
      pageSize={pageSize}
    />
  );
};

export default Pagination;
