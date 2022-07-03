import { gql, useQuery } from "@apollo/client";
import { Text, View, FlatList } from "react-native";
import ScreenLayout from "../components/ScreenLayout";
import { COMMENT_FRAGMENT, PHOTO_FRAGMENT } from "../fragments";

export const FEED_QUERY = gql`
  query seeFeed {
    seeFeed {
      ...PhotoFragment
      user {
        userName
        avatar
      }
      caption
      comments {
        ...CommentFragment
      }
      createdAt
      isMine
    }
  }
  ${PHOTO_FRAGMENT}
  ${COMMENT_FRAGMENT}
`;

interface Comment {
  id: number;
  isMine: boolean;
  payload: string;
  user: { avatar: string; userName: string };
}
interface Photo {
  id: number;
  file: string;
  likes: number;
  commentNumber: number;
  isLiked: boolean;
  isMine: boolean;
  caption: string;
  comments: [Comment];
  user: { avatar: string; userName: string };
}

const Feed = () => {
  const { data, loading } = useQuery<{ seeFeed: Photo[] }>(FEED_QUERY);
  const renderPhoto = ({ item: photo }: { item: Photo }) => {
    return (
      <View style={{ flex: 1 }}>
        <Text style={{ color: "white" }}>{photo.caption}</Text>
      </View>
    );
  };
  return (
    <ScreenLayout loading={loading}>
      <FlatList
        data={data?.seeFeed}
        keyExtractor={(photo) => photo.id + ""}
        renderItem={renderPhoto}
      />
    </ScreenLayout>
  );
};

export default Feed;
