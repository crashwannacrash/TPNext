import Image from 'next/image'

export default function Page() {
    return (
        <>
            <p>Cet examen est l'oeuvre de Sacha LEFETZ (big boss)</p>
            <Image
                src={''}
                className="rounded-full"
                alt={`sacha's profile picture`}
                width={28}
                height={28}
            />
        </>
    );
  }