import { createContext } from "react";
import { cn } from "../../lib/utils";
const tableContext = createContext();

function Table({ children, columns }) {
    return (
        <tableContext.Provider value={{ columns }}>
            <div className={cn("rounded-lg overflow-hidden bg-slate-100 text-xl divide-solid ")} role="table">{children}</div>
        </tableContext.Provider>
    );
}
function Header({ children }) {
    return <div role="row">{children}</div>;
}
function Body({ data, render }) {
    if (!data.length) return <p>No data found</p>;
    return (<section>
        {data.map(render)}
    </section>
    );
}

function Row({ children }) {
    return <div role="row">{children}</div>;
}

Table.Header = Header;
Table.Body = Body;
Table.Row = Row;
Table.Footer = Footer;
Table.Empty = Empty;
export default Table;