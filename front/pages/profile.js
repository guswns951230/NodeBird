import React from 'react';
import Head from 'next/head';

import AppLayout from '../components/AppLayout';
import NicknameEditForm from '../components/NicknameEditForm';
import FollowList from '../components/FollowList';

const Profile = () => {
    const followerList = [{ nickname: '강현준' }, { nickname: '강동훈' }, { nickname: '류동균' }];
    const followingList = [{ nickname: '강현준' }, { nickname: '강동훈' }, { nickname: '류동균' }];

    return (
        <>
            <Head>
                <title>내 프로필 | NodeBird</title>
            </Head>
            <AppLayout>
                <NicknameEditForm />
                <FollowList header="팔로잉 목록" data={followingList} />
                <FollowList header="팔로우 목록" data={followerList} />
            </AppLayout>
        </>
    );
};

export default Profile;