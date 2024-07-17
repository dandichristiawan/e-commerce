interface Props {
  limit: number;
  skip: number;
  total: number;
  setPage: (value: number) => void;
}

export const Pagination = (
    { 
        limit, 
        skip, 
        total, 
        setPage 
    }: Props) => {
  const sum = Math.ceil(total / limit);
  const currentPage = Math.ceil(skip / limit) + 1;

  const getPageNumbers = () => {
    const pageNumbers = [];
    if (sum <= 5) {
      for (let i = 1; i <= sum; i++) {
        pageNumbers.push(i);
      }
    } else {
      if (currentPage <= 3) {
        pageNumbers.push(1, 2, 3, 4, '...', sum);
      } else if (currentPage >= sum - 2) {
        pageNumbers.push(1, '...', sum - 3, sum - 2, sum - 1, sum);
      } else {
        pageNumbers.push(1, '...', currentPage - 1, currentPage, currentPage + 1, '...', sum);
      }
    }
    return pageNumbers;
  };

  const pageNumbers = getPageNumbers();

  const handleClick = (number: number | string) => {
    if (typeof number === 'number') {
      setPage((number - 1) * limit);
    }
  };

  return (
    <nav aria-label="Page navigation example">
      <ul className="inline-flex -space-x-px text-sm">
        <li>
          <a
            href="#"
            onClick={() => handleClick(currentPage - 1)}
            className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-black bg-white border border-e-0 border-gray-700 rounded-s hover:bg-black hover:text-black dark:hover:bg-black dark:hover:text-white"
          >
            {`<<`}
          </a>
        </li>
        {pageNumbers.map((number, index) => (
          <li key={index}>
            {number === '...' ? (
              <span className="flex items-center justify-center px-3 h-8 leading-tight text-black bg-white border border-gray-700">
                ...
              </span>
            ) : (
              <a
                href="#"
                onClick={() => handleClick(number)}
                className={`flex items-center justify-center px-3 h-8 leading-tight ${
                  currentPage === number ? 'bg-black text-white' : 'text-black bg-white'
                } border border-gray-700 hover:bg-black hover:text-black dark:hover:bg-black dark:hover:text-white`}
              >
                {number}
              </a>
            )}
          </li>
        ))}
        <li>
          <a
            href="#"
            onClick={() => handleClick(currentPage + 1)}
            className="flex items-center justify-center px-3 h-8 leading-tight text-black bg-white border border-gray-700 rounded-e hover:bg-black hover:text-black dark:hover:bg-black dark:hover:text-white"
          >
            {`>>`}
          </a>
        </li>
      </ul>
    </nav>
  );
};