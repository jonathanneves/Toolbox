using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Projectile : MonoBehaviour {

    public float speed;
    public float lifeTime;
    public float distance;
    public LayerMask whatIsSolid;
    public int damage;

    public GameObject ClapEffect;
    public GameObject destroyEffect;

    void Start()
    {
        Invoke("DestroyProjectile", lifeTime);
    }

    void Update()
    {
        RaycastHit2D hitInfo = Physics2D.Raycast(transform.position, transform.up, distance, whatIsSolid);
        if(hitInfo.collider != null)
        {
            if (hitInfo.collider.CompareTag("Enemy"))
            {  
                hitInfo.collider.GetComponent<Enemy>().TakeDamage(damage);
            }
            if (hitInfo.collider.CompareTag("Clap"))
            {
                hitInfo.transform.parent.GetComponent<Enemy>().TakeDamage(damage);
            }
            if (hitInfo.collider.CompareTag("GachiPls"))
            {
                hitInfo.collider.GetComponent<Enemy2>().TakeDamage(damage);
            }
            if (hitInfo.collider.CompareTag("Enemy2"))
            {
                hitInfo.collider.GetComponent<Enemy3>().TakeDamage(damage);
            }
            if (hitInfo.collider.CompareTag("Clap2"))
            {
                hitInfo.transform.parent.GetComponent<Enemy3>().TakeDamage(damage);
            }
            if (hitInfo.collider.CompareTag("MiniClap"))
            {
                Instantiate(ClapEffect, transform.position, transform.rotation);
                Destroy(GameObject.FindGameObjectWithTag("MiniClap"));
            }
                DestroyProjectile();
        }
        transform.Translate(Vector2.up * speed * Time.deltaTime);
    }

    void DestroyProjectile()
    {
        Instantiate(destroyEffect, transform.position, Quaternion.identity);
        Destroy(gameObject);
    }

}
