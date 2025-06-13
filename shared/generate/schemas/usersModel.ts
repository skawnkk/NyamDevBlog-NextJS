/**
 * Generated by orval v7.9.0 🍺
 * Do not edit manually.
 * Sabujak
 * 사부작 API Description
 * OpenAPI spec version: 1.0
 */
import type { UsersModelNicknameAndEmail } from './usersModelNicknameAndEmail';
import type { UsersModelRole } from './usersModelRole';
import type { PostsModel } from './postsModel';
import type { ChatsModel } from './chatsModel';
import type { MessagesModel } from './messagesModel';
import type { ImageModel } from './imageModel';
import type { CommentModel } from './commentModel';

export interface UsersModel {
  /** PK ID */
  id: number;
  /** 생성일시 */
  createdAt: string;
  /** 수정일시 */
  updatedAt: string;
  /** 닉네임 (2~20자) */
  nickname: string;
  /** 이메일 주소 */
  email: string;
  /** 닉네임과 이메일을 합친 가상 필드 (출력용) */
  nicknameAndEmail: UsersModelNicknameAndEmail;
  /** 비밀번호 (8~20자) */
  password: string;
  /** 사용자 권한 */
  role: UsersModelRole;
  /** 작성한 게시글 목록 */
  posts: PostsModel[];
  /** 참여 중인 채팅방 목록 */
  chats: ChatsModel[];
  /** 작성한 메시지 목록 */
  messages: MessagesModel[];
  /** 프로필 사진 */
  image: ImageModel;
  /** 작성한 댓글 */
  postComments: CommentModel;
}
