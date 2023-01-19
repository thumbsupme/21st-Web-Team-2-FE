import { useMutation, useQueryClient } from '@tanstack/react-query';

import { Comment, createComment } from '@src/apis';

import { queryKeys } from './constant';

export const useCreateComments = (topicId: number) => {
  const queryClient = useQueryClient();

  // TODO-GYU: 성공시, 실패시 등 낙관적업데이트 관련 로직 추가
  const mutateComment = useMutation(
    (commentContent: Comment['commentContent']) => createComment(topicId, commentContent),
    {
      onSuccess: () => queryClient.invalidateQueries([queryKeys.comment, topicId]),
    },
  );

  return { mutateComment };
};