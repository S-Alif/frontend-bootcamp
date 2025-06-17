const Pagination = ({
    total,
    currentPage,
    setPage,
    limit,
    loading = false
}) => {
    const totalPages = Math.ceil(total / limit)

    if (totalPages <= 1 || loading) return null

    // previous page
    const handlePrev = () => {
        if (currentPage > 1) setPage(currentPage - 1)
    }

    // next page
    const handleNext = () => {
        if (currentPage < totalPages) setPage(currentPage + 1)
    }

    // clicking a page number
    const handleClick = (pageNum) => {
        if (pageNum !== currentPage) setPage(pageNum)
    }

    // generate array of page numbers
    const pages = []
    for (let i = 1; i <= totalPages; i++) {
        pages.push(i)
    }

    return (
        <div className="pagination mt-4 flex items-center justify-center gap-2">
            <button
                onClick={handlePrev}
                disabled={currentPage === 1}
                className={`btn isBtn bg-deep-green ${currentPage === 1 && "disabled"} `}
            >
                Prev
            </button>

            {
                pages.map((page) => (
                    <button
                        key={page}
                        onClick={() => handleClick(page)}
                        className={`btn isBtn bg-green ${page == currentPage && "disabledNumber"}`}
                    >
                        {page}
                    </button>
                ))
            }

            <button
                onClick={handleNext}
                disabled={currentPage === totalPages}
                className={`btn isBtn bg-deep-green ${currentPage === totalPages && "disabled"} `}
            >
                Next
            </button>
        </div>
    )
}

export default Pagination