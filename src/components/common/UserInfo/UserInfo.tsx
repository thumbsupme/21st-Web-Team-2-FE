import React, { FC } from 'react';

import { MEMBER } from '@mocks/data/member';

import DefaultImage from '@src/assets/user-default.png';
import Member from '@src/types/Member';

import * as S from './UserInfo.styles';

// TODO-GYU: 로그인 관련해서 user api 방식에 따라 달라질 예정
// 우선 Member 의 MockData 로 처리
interface Props {
  type?: 'simple' | 'full';
  member: Member;
}

const UserInfo: FC<Props> = (props) => {
  const { type = 'full', member } = props;
  const { nickname, jobCategory, workingYears, profileImage } = member;

  const size = type === 'full' ? 44 : 28;

  return (
    <S.Wrapper>
      <S.Profile src={profileImage ?? DefaultImage} alt={nickname} width={size} height={size} />
      <S.SummaryWrapper>
        <S.UserNickName>{nickname}</S.UserNickName>
        {type === 'full' && (
          <S.UserInfo>
            {jobCategory}·{workingYears}년차
          </S.UserInfo>
        )}
      </S.SummaryWrapper>
    </S.Wrapper>
  );
};

export default UserInfo;