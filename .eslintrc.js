module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: ["airbnb"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint"],
  rules: {
    quotes: ["error", "double"], //���� ���� ���
    "@typescript-eslint/quotes": ["error", "double"], //���� ���� ���
    "no-unused-vars": "off", //������ ���� ��� �ߺ�
    "@typescript-eslint/no-unused-vars": "warn", //������ ������ ���
    "jsx-a11y/control-has-associated-label": "off", // ��ȣ�ۿ��ϴ� ������Ʈ�� label�� �ִ´�
    "react/no-array-index-key": "off", // key������ index�� ����Ҽ� �ִ�.
    "comma-dangle": "off", // �������� , �� �־����� �ʴ´�.
    "arrow-body-style": "off", //ȭ��ǥ �Լ� �ȿ� return�� ��� �� �� �ִ�.
    "react/no-unescaped-entities": "off", //���ڿ� ������ " ' > } ���
    "react/prop-types": "off", //proptypes�� ������� �ʴ´�.
    "object-curly-newline": "off", // { ���� �� �ٲ��� ������ ������� �ʴ´�.
    "react/jsx-one-expression-per-line": "off", //�Ѷ��ο� �������� JSX�� ��� �� �� �ִ�.
    "implicit-arrow-linebreak": "off", // ȭ��ǥ �Լ� ������ �� �ٲ��� ����� �� �ִ�.
    "no-shadow": "off", //���� ������ �ߺ� �̸��� ��� �� �� �ִ�.
    "spaced-comment": "off", //�ּ��� �ڿ� �� �� �ִ�.
    "operator-linebreak": "off", //������ ���� �� �ٲ��� ��� �� �� �ִ�.
    "react/react-in-jsx-scope": "off", // jsx�� ����Ͽ��� React�� �� import ���� �ʾƵ� �ȴ�.
    "react/jsx-props-no-spreading": "off", //props�� �������� �� �� �ִ�.
    "jsx-a11y/anchor-is-valid": "off", // next js������ a�� href���� ���
    "global-require": "off", //�Լ� ������ require ��밡��
    "react/jsx-filename-extension": [
      1,
      { extensions: [".js", ".jsx", ".tsx"] }, //jsx��밡���� Ȯ���� ����
    ],
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        js: "never",
        jsx: "never",
        ts: "never",
        tsx: "never",
      }, //import �� Ȯ���ڸ��� ������� �ʴ´�.
    ],
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx", ".d.ts"],
      },
    },
  },
};
