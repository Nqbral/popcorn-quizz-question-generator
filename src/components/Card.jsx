export default function Card({ children }) {
    return (
        <div
            className="card flex flex-col items-center rounded-md p-5 shadow-md shadow-neutral-900"
            style={{ backgroundColor: '#515151' }}
        >
            {children}
        </div>
    );
}
