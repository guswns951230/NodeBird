export const initialState = {
    mainPosts: [{
        id: 1,
        User: {
            id: 1,
            nickname: '강현준'
        },
        content: '첫 번째 게시글  #해시태그 #익스프레스',
        Images: [{
            src: 'https://pds.joins.com/news/component/htmlphoto_mmdata/202001/01/f86957cb-ee94-4611-bc81-a5478ca91f92.jpg',
        }, {
            src: 'https://i.pinimg.com/originals/ca/f3/b6/caf3b69ddbfcbd51b55c7fcbad7ab392.jpg',
        }, {
            src: 'https://cdnweb01.wikitree.co.kr/webdata/editor/202005/08/img_20200508172536_ccf5402a.webp',
        }],
        Comments: [{
            User: {
                nickname: 'Ryu',
            },
            content: '안녕하세요.'
        }, {
            User: {
                nickname: 'Hoon',
            },
            content: '반갑습니다.',
        }]
    }],
    imagePaths: [],
    postAdded: false,
}

const ADD_POST = 'ADD_POST';
export const addPost = {
    type: ADD_POST,
}

const dummyPost = {
    id: 2,
    content: '더미데이터 입니다.',
    User: {
        id: 1,
        nickname: '강현준',
    },
    Images: [],
    Comments: [],
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                mainPosts: [dummyPost, ...state.mainPosts],
                postAdded: true,
            }
        default:
            return state;
    }
};

export default reducer;