import React, {ChangeEvent, MouseEvent, useCallback, useState} from "react";

type SearchProps = {
    search: (searchValue?: (string | undefined)) => Promise<void>
}

function Search({search}: SearchProps) {

    const [searchValue, setSearchValue] = useState('')

    const onChange = useCallback(
        (e: ChangeEvent<HTMLInputElement>) => {
            setSearchValue(e.target.value)
        },
        []
    )

    const onClick = useCallback(
        (e: MouseEvent<HTMLInputElement>) => {
            e.preventDefault()
            search(searchValue).then()
            setSearchValue('')
        },
        [searchValue, search]
    )

    return (
        <form className="search">
            <input
                value={searchValue}
                onChange={onChange}
                type="text"
            />
            <input onClick={onClick} type="submit" value="SEARCH"/>
        </form>
    )
}

export default Search