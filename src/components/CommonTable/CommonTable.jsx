import { Table } from "react-bootstrap";


const CommonTable = ({
    className,
    fields,
    children,
}) => {
    return (
        <Table responsive className={`common_table ${className || ""}`}>
            {fields?.length > 0 && (
                <thead>
                    <tr>
                        {fields.map((item, index) =>
                            item.label ? (
                                <th key={index}>
                                    {item.label}
                                </th>
                            ) : null
                        )}
                    </tr>
                </thead>
            )}

            <tbody>
                {children || (
                    <tr>
                        <td colSpan={fields.length}>
                            <div className="no_data">
                                <h4>No data available</h4>
                            </div>
                        </td>
                    </tr>
                )}
            </tbody>
        </Table>
    );
};

export default CommonTable;
