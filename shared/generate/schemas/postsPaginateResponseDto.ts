/**
 * Generated by orval v7.9.0 🍺
 * Do not edit manually.
 * Sabujak
 * 사부작 API Description
 * OpenAPI spec version: 1.0
 */
import type { PostsModel } from './postsModel';
import type { PostsPaginateResponseDtoCursor } from './postsPaginateResponseDtoCursor';

export interface PostsPaginateResponseDto {
  data: PostsModel[];
  total?: number;
  /** @nullable */
  next?: string | null;
  /** @nullable */
  count?: number | null;
  /** @nullable */
  cursor?: PostsPaginateResponseDtoCursor;
}
