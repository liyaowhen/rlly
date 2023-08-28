import './SplitLayout.css';

export default function SplitLayout({
    left, 
    center, 
    right
}: {
    left: any, 
    center: any, 
    right: any
}) {
    return (
        <div id="cover" className="min-h-screen h-screen">
            <div className="split">
                <div id="left">{left}</div>
                <div id="center">{center}</div>
                <div id="right">{right}</div>
            </div>
            <footer>
                footer
            </footer>
        </div>
    )
}