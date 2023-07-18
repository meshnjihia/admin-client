type NoResultsProps = {
    description: string
}
export const NoResults = ({ description }: NoResultsProps) => {
    
    return (
        <div className="flex items-center justify-center h-full w-full text-neutral-500 pt-5">
            {description}
        </div>
    )
}