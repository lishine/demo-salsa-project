/** @jsx builder */
/* eslint-disable react/prop-types */


curl 'https://graphql.datocms.com/' \
    -H 'Authorization: 588e06682efce3e207dd8d34eecba0' \
    -H 'Content-Type: application/json' \
    -H 'Accept: application/json' \
    --data-binary '{ "query": "query { landing {*} }" }'


import builder, {Tabs, Default} from 'canner-script';

const columns = [{
  title: 'Title',
  dataIndex: 'title'
}, {
  title: '',
  dataIndex: 'coverPicture'
}];

const Posts = () => <array
  keyName="posts"
  ui="tableRoute"
  title="posts"
  uiParams={{
    columns
  }}
>
  <toolbar>
    <pagination />
    <filter>
      <selectFilter
        alwaysDisplay
        label=""
        defaultOptionIndex={0}
        options={[{
          text: 'All',
          condition: {
            condition: {}
          }
        }, {
          text: 'Published',
          condition: {
            draft: {
              eq: false
            }
          }
        }, {
          text: 'draft',
          condition: {
            draft: {
              eq: true
            }
          }
        }]}
      />
    </filter>
  </toolbar>
  <Tabs>
    <Default title="Basic" keyName="basic">
      <string
        keyName="title"
        title="title"
        required
        layout="horizontal"
      />
      <object keyName="content" title="" ui="editor"
        uiParams={{
          minHeight: '60vh'
        }}
      />
    </Default>
    <Default title="Options" injectValue={{layout: 'horizontal'}} keyName="options">
      <boolean keyName="draft" title="Draft" />
      <image keyName="coverPicture" title="Cover Picture"/>
      <boolean keyName="topLevel" title="Parent page" />
      <relation keyName="categories"
        ui="multipleSelect"
        title="categories"
        relation={{type: 'toMany', to: 'categories'}}
        uiParams={{
          columns: [{
            title: 'Name',
            dataIndex: 'name'
          }]
        }}
      />
    </Default>
  </Tabs>
</array>;

export default Posts;
