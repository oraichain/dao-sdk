## Generate code and docs

```bash
# build code:
cwtools build ../dao-contracts/contracts/dao-dao-core ../dao-contracts/contracts/external/* ../dao-contracts/contracts/pre-propose/* ../dao-contracts/contracts/proposal/* ../dao-contracts/contracts/staking/* ../dao-contracts/contracts/voting/* -o packages/contracts-build/data
# gen code:
cwtools gents ../dao-contracts/contracts/dao-dao-core ../dao-contracts/contracts/external/* ../dao-contracts/contracts/pre-propose/* ../dao-contracts/contracts/proposal/* ../dao-contracts/contracts/staking/* ../dao-contracts/contracts/voting/* -o packages/contracts-sdk/src
# gen doc:
yarn docs

# build
yarn build . --outDir build
# build individual packages
yarn build packages/contracts-sdk
yarn build packages/contracts-build
# publish package
yarn deploy packages/contracts-sdk --patch
yarn deploy packages/contracts-build --patch

# update comments:
git apply patches/contracts-sdk.patch
# edit contracts-sdk
git diff packages/contracts-sdk > patches/contracts-sdk.patch
# rollback
git checkout packages/contracts-sdk
```
