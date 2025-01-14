import SearchForm from "@/components/ui/SearchForm";
import StartupCard from "@/components/ui/StartupCard";

export default async function Home({ searchParams } : { searchParams: Promise<{ query ?: string }> }) {
  const query = (await searchParams).query
  const posts = [
    {
      _id: 1,
      _createdAt: new Date(),
      description: 'This is a description',
      image: 'https://images.unsplash.com/photo-1638437447613-68773485f997?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      views: 55,
      category: 'Robots',
      title: 'We Robots',
      author: {
        _id: 1,
        name: 'Adrian'
      }
    }
  ]
  return (
    <>
      <section className="pink_container">
        <h1 className="heading">
          pitch Your Startup, <br /> Connect With Entrepreneurs
        </h1>
        <p className="sub-heading !max-w-3xl">
          Submit ideas, Vote on Pitches, and Get Noticed in Virtual Competitiones.
        </p>
        <SearchForm query={query} />
      </section>
      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search result for "${query}"` : 'All Startups' }
        </p>
        <ul className="mt-7 card_grid">
          {posts?.length > 0 
            ? posts.map(post => <StartupCard key={post._id} post={post} />)
            : <p className="no-results">no startups found</p>
          }
        </ul>
      </section>
    </>
  );
}
