const increment = (data) => {
    return {
        type: 'INCREMENT',
        payload: data
    }
}

export { increment}