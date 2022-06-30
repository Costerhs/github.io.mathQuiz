export let store = {
    users: [
        {
            name: 'username1',
            point: 1,
            score: 100
        },
        {
            name: 'username2',
            point: 13,
            score: 100
        },
        {
            name: 'username3',
            point: 100,
            score: 100
        }
    ],
    dispatch(action) {
        switch (action.type) {
            case 'PUT__USER':
                this.users = [...this.users, action.data]
                break;
            default:
                break;
        }
    }
}

