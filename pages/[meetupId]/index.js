import MeetupDetail from "../../components/meetups/MeetupDetail";

function MeetupDetails() {
  return (
    <MeetupDetail
      image="https://upload.wikimedia.org/wikipedia/commons/d/d2/Bois_de_Vincennes_20060816_16.jpg"
      title="A Frist Meetup"
      address="Some city, some country"
      description="The meetup description"
    />
  );
}

export async function getStaticProps(context) {
  // fetch data for single meetup

  const meetupId = context.params.meetupId;
  console.log(meetupId);

  return {
    props: {
      meetupData: {
        image:
          "https://upload.wikimedia.org/wikipedia/commons/d/d2/Bois_de_Vincennes_20060816_16.jpg",
        title: "A Frist Meetup",
        address: "Some city, some country",
        description: "The meetup description",
      },
    },
  };
}

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: "m1",
        },
      },
      {
        params: {
          meetupId: "m2",
        },
      },
    ],
  };
}

export default MeetupDetails;
