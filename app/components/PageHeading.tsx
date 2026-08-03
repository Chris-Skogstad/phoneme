type PageHeadingProps = {
  title: string;
  description?: string;
};

export default function PageHeading({ title, description }: PageHeadingProps) {
  return (
    <div className="text-center mb-6">
      <h1 className="text-2xl font-bold mb-2">{title}</h1>
      {description && (
        <p className="text-gray-600 max-w-md mx-auto">{description}</p>
      )}
    </div>
  );
}