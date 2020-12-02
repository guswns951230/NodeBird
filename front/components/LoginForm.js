import React, { useState, useCallback } from 'react';
import { Form, Input, Button } from 'antd';
import Link from 'next/link';
import styled from 'styled-components';

const FormWrapper = styled.div`
    margin-left: 5px;
`;
const ButtonWrapper = styled.div`
    margin-top: 10px;
`;

const LoginForm = () => {
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');

    const onChangeId = useCallback((e) => {
        setId(e.target.value);
    }, []);

    const onChangePassword = useCallback((e) => {
        setPassword(e.target.value);
    }, []);

    return (
        <FormWrapper>
            <Form>
                <div>
                    <label htmlFor="user-id">아이디</label>
                    <br />
                    <Input name="user-id" value={id} onChange={onChangeId} required />
                </div>
                <div>
                    <label htmlFor="user-password">비밀번호</label>
                    <br />
                    <Input
                        name="user-password"
                        type="password"
                        value={password}
                        onChange={onChangePassword}
                        required
                    />
                </div>
                <ButtonWrapper>
                    <Button type="primary" htmlType="submit" loading={false}>로그인</Button>
                    <Link href="/signup"><a><Button style={{ marginLeft: 5 }}>회원가입</Button></a></Link>
                </ButtonWrapper>
            </Form>
        </FormWrapper>

    );
}

export default LoginForm;