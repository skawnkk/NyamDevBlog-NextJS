import { config } from 'dotenv';

config(); // <- dotenv로 .env 로드

const orvalConfig = {
  api: {
    input: `${process.env.NEXT_PUBLIC_API_URL}/api-json`,
    output: {
      mode: 'tags',
      target: './shared/generate/apis', // 생성될 클라이언트 파일 위치
      schemas: './shared/generate/schemas', // DTO 분리할 폴더
      client: 'react-query',
      hooks: true,
      override: {
        mutator: {
          path: './orval.axios.ts',
          name: 'axiosInstance',
        },
      },
    },
    hooks: {
      afterAllFilesWrite: 'prettier --write',
    },
  },
};

export default orvalConfig;
