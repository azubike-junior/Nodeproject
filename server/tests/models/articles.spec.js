import chai from "chai";
import chaiAsPromise from "chai-as-promised";
import models from "../../models";
import { userData } from "../fixtures/models/userData";
import article from "../fixtures/models/articleData";
import { category } from "../fixtures/models/categories";

chai.use(chaiAsPromise);
const { assert, expect } = chai;
const { Articles, Users, Categories } = models;

beforeEach(async () => {
  await models.sequelize.sync({ force: true });
});

const articleDependencies = async () => {
  const createdUser = await Users.create(userData[0]);
  const userId = createdUser.get("id");
  const articleCategory = await Categories.create(category);
  const categoryId = articleCategory.get("id");
  const articleTemplate = Object.assign(article, {
    authorId: userId,
    categoryId
  });
  const articleInstance = await Articles.create(articleTemplate);
  const articleId = articleInstance.get("id");

  return Promise.resolve({
    userId,
    articleId,
    user: createdUser,
    article: articleInstance
  });
};

describe("Articles", () => {
  it("should create an instance of Articles", async () => {
    const dependencies = await articleDependencies();
    assert.instanceOf(dependencies.article, Articles);
    assert.lengthOf(Object.keys(dependencies.article.dataValues), 12);
  });

  it("should delete an article table", async () => {
    const dependencies = await articleDependencies();
    assert.instanceOf(dependencies.article, Articles);
    await Articles.drop({ cascade: true });
    expect(
      Articles.findOne({ where: { id: dependencies.articleId } })
    ).to.rejectedWith(Error);
  });
});

after(async () => {
  await models.sequelize.drop({ force: true });
});
