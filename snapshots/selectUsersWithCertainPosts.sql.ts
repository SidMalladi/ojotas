// @ts-nocheck
$paramsTypePlaceholder$

$returnTypePlaceholder$

export const selectUsersWithCertainPosts = (params: SelectUsersWithCertainPostsQueryParams) => {
  return () => {
    return {
      sql: 'SELECT `u`.`name` AS `u.name`, `p`.`title` AS `p.title`, `p`.`content` AS `p.content` FROM `users` AS `u` INNER JOIN `posts` AS `p` ON `u`.`id` = `p`.`user_id` WHERE `p`.`title` LIKE :title',
      params: params,
      identifiers: ["u.name","p.title"],
      cast: (rows: unknown) => {
        return rows as ISelectUsersWithCertainPostsQueryResultItem[];
      } 
    }
  }
};
