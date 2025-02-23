type ClassName = {
    className?: string
}

export default function FilterIsland({className}: ClassName) {
    return (
        <div className={className}>
            <p>Filtering features contained in this island</p>
        </div>
    )
}