module.exports = async (model, page, limit) => {
  const total = await model.countDocuments();
  const pageCount = Math.ceil(total / limit);
  const start = (page - 1) * limit + 1;
  let end = start + limit - 1;
  if (total < end) end = total;
  if (total < start) start = 0;

  let nextPage = page < pageCount ? page + 1 : "last page";
  let prevPage = page > 1 ? page - 1 : "open page";

  const pagination = {
    total,
    pageCount,
    start,
    end,
    limit,
    nextPage,
    prevPage,
  };
  return pagination;
};
