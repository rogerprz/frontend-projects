export const commitGraphData = async () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const commitData = () => {
                return new Array(365).fill(0).map(() => {
                    const rand = Math.random() * 28
                    if (rand <= 17 && rand >= 12) {
                        return 0
                    }
                    return Math.floor(rand)
                })
            }
            resolve(commitData())
        }, 3000)
    })
}