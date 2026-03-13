import ReactPaginate from "react-paginate";

const CommonPagination= ({
    limit,
    page,
    count,
    onChange,
}) => {

    if (!count || !limit || count <= limit) return null;

    const pageCount = Math.ceil(count / limit);

    return (
        <div className="page_nation">
            <ReactPaginate
                pageCount={pageCount}
                forcePage={Math.max(0, page - 1)}
                onPageChange={({ selected }) => onChange(selected + 1)}
                previousLabel="‹"
                nextLabel="›"
                containerClassName="pagination"
                pageClassName="page-item"
                pageLinkClassName="page-link"
                previousClassName="page-item"
                previousLinkClassName="page-link"
                nextClassName="page-item"
                nextLinkClassName="page-link"
                breakClassName="page-item"
                breakLinkClassName="page-link"
                activeClassName="active"
            />
        </div>
    );
};

export default CommonPagination;