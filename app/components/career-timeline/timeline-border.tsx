interface TimelineBorderProps {
    index: number;
    totalNodes: number
}

export default function TimelineBorder({ index, totalNodes }: TimelineBorderProps) {
    return (
        <div className='flex flex-col justify-center'>
            <div className={index !== 0 ? 'h-1/2 border-black border-l-4' : 'h-1/2'} />
            <div className={index !== totalNodes - 1 ? 'h-1/2 border-black border-l-4' : 'h-1/2'} />
            <div className='absolute h-3 w-3 -ml-1 border-solid border-2 border-black bg-white rounded-full' />
        </div>
    )
}