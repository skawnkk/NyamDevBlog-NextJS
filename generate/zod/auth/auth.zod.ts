/**
 * Generated by orval v7.9.0 🍺
 * Do not edit manually.
 * Sabujak
 * 사부작 API Description
 * OpenAPI spec version: 1.0
 */
import {
  z as zod
} from 'zod';


export const authControllerPostTokenAccessHeader = zod.object({
  "authorization": zod.string()
})

export const authControllerPostRefreshAccessHeader = zod.object({
  "authorization": zod.string()
})

export const authControllerPostLoginWithEmailHeader = zod.object({
  "authorization": zod.string()
})

export const authControllerPostRegisterWithEmailBody = zod.object({

})

