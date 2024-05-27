interface Props {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}
const CustomPagination = ({ totalPages, currentPage, onPageChange }: Props) => {
  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <div className="flex justify-center gap-2 mt-4">
      {pages.map(page => (
        <button
          key={page}
          className={`px-3 py-2 rounded-md ${
            currentPage === page
              ? 'bg-blue-500 text-white'
              : 'bg-gray-200 text-gray-700'
          }`}
          onClick={() => onPageChange(page - 1)}
        >
          {page}
        </button>
      ))}
    </div>
  );
};

export default CustomPagination;
