## API
```bash


#Todos
할일 추가
POST /todos 
{
  "title" : ,
  "group_id" : ,
  "done" : ,
}

할일 체크
PUT : /todo/:todoId

전체 할일 보기
GET /todos

완료된 할일 보기
GET /todo-done

#Group
그룹 추가
POST /group
{
  "name": 
}

그룹 목록 보기
GET /groups

그룹 내 할일 추가
POST /group/:groupId 
{
  "title" : ,
  "group_id" : ,
  "done" : ,
}

그룹 내 할일 보기
GET /group/:groupId

그룹 목록 보기
GET /groups
```
## DB 구조
```bash
# Tables Relation
 Groups : Todos = 1 : N

# Todos
  - 'id' (pk) : Primary Key
  - 'title' (string) : 제목
  - 'group_id' (fk) : Foreign Key
  - 'done' (boolean) : 완료 상태

# Groups
  - 'id' (string) : Primary Key
  - 'name' (string) : 그룹 이름
```


