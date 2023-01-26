import React, { FC } from 'react';

import DefaultImage from '@src/assets/user-default.png';
import TagList from '@src/components/common/TagList';
import Member from '@src/types/Member';

import * as S from './TopicUserInfo.styles';

interface Props {
  member: Member;
  tags: string[];
}

const TopicUserInfo: FC<Props> = (props) => {
  const { member, tags } = props;

  const { nickname, profileImage, jobCategory, workingYears } = member;
  return (
    <S.Wrapper>
      <S.MemberSummary>
        <S.Profile src={profileImage ?? DefaultImage} alt={nickname} width={44} height={44} />
        <S.MemberWrapper>
          <S.MemberNickName>{nickname}</S.MemberNickName>
          <S.MemberInfo>
            {jobCategory}·{workingYears}연차
          </S.MemberInfo>
        </S.MemberWrapper>
      </S.MemberSummary>
      <S.TagListWrapper>
        <TagList tags={tags} />
      </S.TagListWrapper>
    </S.Wrapper>
  );
};

export default TopicUserInfo;
