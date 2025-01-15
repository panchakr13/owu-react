import {useSearchParams} from "react-router-dom";


const PaginationComponent = () => {
    const [skipQuery, setSkipQuery] = useSearchParams({skip:'0'});
    return (
        <div>
            <button onClick={() =>{
                const skip = skipQuery.get('skip')
                if (skip) {
                    let currentSkip = +skip;
                    currentSkip -= 30;
                    setSkipQuery({skip: currentSkip.toString()})}

            }}>prev
            </button>

            <button onClick={() => {
                const skip = skipQuery.get('skip')
                if (skip) {
                    let currentSkip = +skip;
                    currentSkip += 30;
                    setSkipQuery({skip: currentSkip.toString()})
                }

            }}>next
            </button>
        </div>
    );
};

export default PaginationComponent;