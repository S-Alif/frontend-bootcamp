import { useSearchParams } from "react-router";

const useQueryParams = () => {
    const [searchParams, setSearchParams] = useSearchParams()

    const setNewSearchParams = (param, value) => {
        console.log(param, value)
        setSearchParams((prev) => {
            return { ...Object.fromEntries(prev), [param]: value }
        })
    }

    return { ...Object.fromEntries(searchParams), setNewSearchParams }
}

export default useQueryParams